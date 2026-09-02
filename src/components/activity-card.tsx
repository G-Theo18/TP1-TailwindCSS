import type { ActivityData } from "../data/activities.data";
import Chip from "./chips";
import Button from "./button";
import Heading from "./heading";

type ActivityProps = {
  activity: ActivityData;
};

export default function ActivityCard({ activity }: ActivityProps) {
  return (
    <div className="relative aspect-card overflow-hidden rounded-3xl bg-cover bg-center min-w-96" 
        style={{ backgroundImage: `url(${activity.cover})` }}
    >

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative flex h-full flex-col justify-between p-6">
        
        <div className="flex justify-between">
          <Chip className="rounded-full to-grey px-4 py-2 font-semibold text-white">
            {activity.duration}
          </Chip>

          <Chip className="rounded-full to-grey px-4 py-2 font-semibold text-white">
            ★ {activity.rating} ({activity.reviews})
          </Chip>
        </div>

        <div>
          <Heading text="dark" as="h1" size="sm" className="text-white">
            {activity.type === "experience" ? "Expérience" : "Randonnée"}
          </Heading>

          <Heading text="dark" as="h1" size="md" className="text-white">
            {activity.title}
          </Heading>

          <div className="flex flex-wrap gap-3">
            {activity.tags.map((tag) => (
              <Chip key={tag} className="rounded-full to-grey px-4 py-2 font-semibold text-white">
                #{tag}
              </Chip>
            ))}
          </div>

          <div className="mt-5 flex justify-center">
            <Button color="whitegreen" size="md" shape="rounded">
              Réserver
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}