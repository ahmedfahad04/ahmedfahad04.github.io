
import { ArrowRight, BookOpen, FileText, Link as LinkIcon } from 'lucide-react';
import Section from './Section';

const publications = [
  {
    id: 1,
    title: 'Deep Learning Approaches for Predicting Protein-Ligand Interactions',
    journal: 'Nature Machine Intelligence',
    year: 2023,
    authors: 'Researcher, J., Smith, A., Johnson, B.',
    doi: '10.1038/s41467-023-00001-x',
    type: 'Journal Article',
    tags: ['Deep Learning', 'Drug Discovery'],
  },
  {
    id: 2,
    title: 'Explainable AI for Genomic Medicine: Current Applications and Future Perspectives',
    journal: 'Science',
    year: 2022,
    authors: 'Researcher, J., Thompson, C., Garcia, M., Wilson, P.',
    doi: '10.1126/science.2022.12345',
    type: 'Review Article',
    tags: ['Explainable AI', 'Genomics'],
  },
  {
    id: 3,
    title: 'Novel Architectures for Efficient Neural Networks in Resource-Constrained Environments',
    journal: 'Proceedings of the International Conference on Machine Learning (ICML)',
    year: 2021,
    authors: 'Researcher, J., Brown, E.',
    doi: '10.5555/3454287.3454543',
    type: 'Conference Paper',
    tags: ['Neural Networks', 'Efficiency'],
  },
  {
    id: 4,
    title: 'Improving Medical Image Segmentation with Attention-Based Mechanisms',
    journal: 'IEEE Transactions on Medical Imaging',
    year: 2021,
    authors: 'Lee, K., Researcher, J., Davis, R., Martin, S.',
    doi: '10.1109/tmi.2021.3061234',
    type: 'Journal Article',
    tags: ['Medical Imaging', 'Attention Mechanisms'],
  },
];

const PublicationsSection = () => {
  return (
    <Section
      id="publications"
      title="Selected Publications"
      subtitle="Recent research papers published in top-tier journals and conferences"
    >
      <div className="space-y-6 stagger-animation">
        {publications.map((publication) => {
          const Icon = publication.type === 'Journal Article' ? BookOpen : FileText;
          return (
            <div 
              key={publication.id}
              className="glass-card rounded-xl p-6 transition-all no-visible animate-fade-up hover:border-primary/30"
            >
              <div className="flex flex-col md:flex-row gap-4 md:items-center">
                <div className="md:flex-1">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg mr-3">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <span className="text-sm font-medium text-gray-500">{publication.type} • {publication.year}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{publication.title}</h3>
                  <p className="text-gray-700 mb-3">{publication.authors}</p>
                  <p className="text-gray-600 mb-4"><em>{publication.journal}</em></p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {publication.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={`https://doi.org/${publication.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 text-sm font-medium text-primary bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <LinkIcon size={16} className="mr-2" /> DOI
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    PDF
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="text-center mt-12">
        <a 
          href="#" 
          className="inline-flex items-center px-6 py-3 bg-white text-gray-800 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all hover:-translate-y-0.5 no-visible animate-fade-up"
        >
          View All Publications <ArrowRight size={16} className="ml-2" />
        </a>
      </div>
    </Section>
  );
};

export default PublicationsSection;
