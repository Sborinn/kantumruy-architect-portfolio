
import { useState } from "react";
import { X } from "lucide-react";

interface Project {
  id: number;
  image: string;
  title: string;
  location: string;
  year: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80",
    title: "វីឡាទំនើប",
    location: "ភ្នំពេញ",
    year: "២០២៣",
    description: "ការរចនាវីឡាទំនើបដែលបំពេញតាមស្តង់ដារអន្តរជាតិ និងមានបន្ទប់ទំនើបៗ។"
  },
  {
    id: 2, 
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80",
    title: "អគារពាណិជ្ជកម្ម",
    location: "សៀមរាប",
    year: "២០២២",
    description: "ការរចនាអគារពាណិជ្ជកម្មដែលមានរចនាបទទំនើបនិងប្រើប្រាស់បច្ចេកវិទ្យាថ្មីៗ។"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
    title: "អាផាតមិន",
    location: "កំពង់សោម",
    year: "២០២៣",
    description: "ការរចនាអាផាតមិនដែលមានទិដ្ឋភាពស្អាតនៅមាត់សមុទ្រ។"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=800&q=80",
    title: "សណ្ឋាគារបៃតង",
    location: "ភ្នំពេញ",
    year: "២០២១",
    description: "ការរចនាសណ្ឋាគារបៃតងដែលរក្សាធនធានធម្មជាតិនិងប្រើប្រាស់ថាមពលកកើតឡើងវិញ។"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=800&q=80",
    title: "ផ្ទះឯកជន",
    location: "កណ្ដាល",
    year: "២០២២",
    description: "ការរចនាផ្ទះឯកជនដែលមានផាសុខភាពនិងប្រើប្រាស់សម្ភារៈក្នុងស្រុក។"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=800&q=80",
    title: "អគារការិយាល័យ",
    location: "ភ្នំពេញ",
    year: "២០២៣",
    description: "ការរចនាអគារការិយាល័យដែលមាននវានុវត្តន៍សម្រាប់អាជីវកម្មទំនើប។"
  }
];

const PortfolioGallery = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-lg cursor-pointer card-hover"
            onClick={() => setSelectedProject(project)}
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
              <h3 className="text-white text-xl font-bold">{project.title}</h3>
              <p className="text-white/80 text-sm">{project.location}, {project.year}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full animate-fade-in">
            <button
              className="absolute -top-12 right-0 p-2 text-white hover:text-accent"
              onClick={() => setSelectedProject(null)}
            >
              <X size={24} />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-background rounded-lg overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h3 className="heading-md mb-2">{selectedProject.title}</h3>
                <div className="mb-4 text-muted-foreground">
                  <p>{selectedProject.location} | {selectedProject.year}</p>
                </div>
                <p className="text-body">{selectedProject.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioGallery;
