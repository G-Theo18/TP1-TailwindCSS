import { useState } from "react";
import Heading from "../heading";
import ActivityCard from "../activity-card";
import Button from "../button";
import { Carrousel } from "../carrousel";
import { ACTIVITIES, type ActivityData } from "../../data/activities.data";

const FILTERS: { label: string; value: ActivityData["type"] | "all" }[] = [
  { label: "Tout", value: "all" },
  { label: "Expériences", value: "experience" },
  { label: "Randonnées", value: "hike" },
];

export default function Tours() {
  const [activeFilter, setActiveFilter] = useState<ActivityData["type"] | "all">("all");

  const filteredActivities =
    activeFilter === "all"
      ? ACTIVITIES
      : ACTIVITIES.filter((activity) => activity.type === activeFilter);

  return (
    <div className="py-20">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 my-10">
        <Heading text="green" as="h1" size="lg" className="font-semibold">
          Composez votre voyage
        </Heading>

        <div className="-mx-6 overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 px-6">
            {FILTERS.map((filter) => (
              <Button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                color={activeFilter === filter.value ? "green" : "grey"}
                size="md"
                shape="pill"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <Carrousel
        items={filteredActivities}
        render={(activity) => (
          <li key={activity.id}>
            <ActivityCard activity={activity} />
          </li>
        )}
      />
    </div>
  );
}