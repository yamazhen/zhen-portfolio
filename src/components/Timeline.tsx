import Image from "next/image";

interface TimelineItem {
  id: number;
  company: string;
  position: string;
  period: string;
  logo: string;
  description: string[];
}

type Props = {
  timelineItems: TimelineItem[];
};

function Timeline({ timelineItems }: Props) {
  return (
    <div className="timeline py-8 gap-8">
      {timelineItems.map((item) => {
        return (
          <div className="timeline-item" key={item.id}>
            <Image
              src={item.logo}
              alt="Test"
              width={50}
              height={50}
              className="rounded-full h-[50px] w-[50px] object-cover border-2 border-zhen-highlight"
            />
            <div className="flex flex-col text-xs max-md:mr-6">
              <small className="text-foreground/75">{item.period}</small>
              <h3 className="text-sm">Containerverse Sdn. Bhd.</h3>
              <small className="text-foreground/75 mb-1">{item.position}</small>
              <ul className="text-foreground/90 list-disc pl-4">
                {item.description.map((desc, index) => {
                  return <li key={index}>{desc}</li>;
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Timeline;
