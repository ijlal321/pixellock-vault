import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { createAutoDriveApi } from '@autonomys/auto-drive'
import { NetworkId } from '@autonomys/auto-utils';

const ManagePhotos = () => {
  const [familyMembers, setFamilyMembers] = useState([]);
  const [newMember, setNewMember] = useState('');
  const [photos, setPhotos] = useState([]);
  const [password, setPassword] = useState('11111111');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const handleLoadMembers = async () => {
      setStatus('Loading Previous Images...');
      const apiKey = import.meta.env.VITE_AUTO_DRIVE_API_KEY;

      if (!apiKey) {
        console.error('API key is not defined');
        return;
      }

      const api = createAutoDriveApi({ apiKey: apiKey, network: NetworkId.TAURUS });

      try {
        const myFiles = await api.getMyFiles(0, 100); // loading 100 files
        console.log(`Retrieved ${myFiles.rows.length} files of ${myFiles.totalCount} total`);

        const loadedPhotos = await Promise.all(myFiles.rows.map(async (file) => {
          try {
            const cid = file.headCid;
            const stream = await api.downloadFile(cid, password);
            let curImage = Buffer.alloc(0);
            for await (const chunk of stream) {
              curImage = Buffer.concat([curImage, chunk]);
            }
            console.log(curImage); // in uint8array format
            // Convert to blob
            const blob = new Blob([curImage], { type: 'image/jpeg' });

            return {
              id: file.headCid,
              name: file.name,
              tags: [],
              file: blob,
            };
          } catch (error) {
            console.error('Error downloading file:', error);
            setStatus('Error loading images');
            return null;
          }
        }));

        setPhotos(loadedPhotos.filter(photo => photo !== null));
      } catch (error) {
        console.error('Error loading family members:', error);
        setStatus('Error loading images');
      }
      setStatus('');
    };

    handleLoadMembers();
  }, []);


  const handleAddMember = () => {
    if (newMember) {
      setFamilyMembers([...familyMembers, newMember]);
      setNewMember('');
    }
  };

  const handleUploadPhoto = async (event) => {
    setStatus('Uploading...');
    const file = event.target.files[0];
    const apiKey = import.meta.env.VITE_AUTO_DRIVE_API_KEY;

    if (!apiKey) {
      console.error('API key is not defined');
      return;
    }

    const api = createAutoDriveApi({ apiKey: apiKey, network: NetworkId.TAURUS });

    const options = {
      password: password,
      compression: true,
    };

    try {
      console.log('Uploading file...');
      const cid = await api.uploadFileFromInput(file, options);
      console.log(`The file is uploaded and its cid is ${cid}`);

      if (file) {
        const newPhoto = {
          id: cid,
          name: file.name,
          tags: [],
          file: file,
        };

        setPhotos([newPhoto, ...photos]);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setStatus('Error uploading image');
    }
    setStatus('');
  };

  const handleTagPhoto = (photoId, member) => {
    setPhotos(photos.map(photo =>
      photo.id === photoId
        ? {
          ...photo,
          tags: photo.tags.includes(member)
            ? photo.tags.filter(tag => tag !== member)
            : [...photo.tags, member],
        }
        : photo
    ));
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main className="container mx-auto px-4 md:px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">Manage My Photos</h1>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">Add Family Members</h2>
          <div className="flex items-center space-x-4 mb-4">
            <input
              type="text"
              value={newMember}
              onChange={(e) => setNewMember(e.target.value)}
              placeholder="Enter family member's name"
              className="w-full px-4 py-2 rounded-md bg-slate-100 border border-slate-300 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-slate-600"
            />
            <button
              onClick={handleAddMember}
              className="btn-hover-effect px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-md transition-colors"
            >
              Add
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {familyMembers.map((member, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                <h3 className="text-lg font-bold mb-2 text-slate-900">{member}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">{status}</h2>
          <h2 className="text-2xl font-bold mb-4 text-slate-900">Upload Photos</h2>
          <input
            type="file"
            onChange={handleUploadPhoto}
            className="mb-4"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.slice(0, 5).map(photo => (
              <div key={photo.id} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                <h3 className="text-lg font-bold mb-2 text-slate-900">{photo.name}</h3>
                <img src={URL.createObjectURL(photo.file)} alt={photo.name} className="w-full h-48 object-cover rounded-md mb-2" />
                <div className="flex flex-wrap gap-2 mb-2">
                  {photo.tags.map((tag, index) => (
                    <span key={index} className="bg-slate-200 text-slate-700 px-2 py-1 rounded-md">{tag}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {familyMembers.map((member, index) => (
                    <button
                      key={index}
                      onClick={() => handleTagPhoto(photo.id, member)}
                      className="btn-hover-effect px-2 py-1 bg-slate-700 hover:bg-slate-600 text-white rounded-md transition-colors"
                    >
                      Tag {member}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {photos.length > 5 && (
            <button className="mt-4 btn-hover-effect px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-md transition-colors">
              View More
            </button>
          )}
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-slate-900">Encryption Password</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter encryption password"
            className="w-full px-4 py-2 rounded-md bg-slate-100 border border-slate-300 text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-slate-600"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ManagePhotos;