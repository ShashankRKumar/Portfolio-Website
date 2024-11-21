interface SkillDataProviderProps {
    src: string;
    width: number;
    height: number;
    index: number;
  }
  
  const SkillDataProvider: React.FC<SkillDataProviderProps> = ({ src, width, height, index }) => {
    return (
      <div key={index} className="skill-item">
        <img src={src} alt={`Skill-${index}`} width={width} height={height} />
      </div>
    );
  };
  
  export default SkillDataProvider;
  