import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import '@/styles/gallery.css';

const Gallery = () => {
  useEffect(() => {
    import('../scripts/gallery');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <section className="gallery-wrap flex-1 px-4 py-8">
        <header className="gallery-header flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Gallery</h1>
          <div className="controls">
            <label className="text-sm">
              Sort
              <select id="sortSelect" aria-label="Sort media" className="ml-2 border rounded p-1 text-sm">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="folder">Folder</option>
              </select>
            </label>
          </div>
        </header>
        <div id="galleryGrid" className="gallery-grid" aria-live="polite"></div>
        <div id="lightbox" className="lightbox" aria-modal="true" aria-hidden="true" role="dialog"></div>
      </section>
      <Footer />
    </div>
  );
};

export default Gallery;
