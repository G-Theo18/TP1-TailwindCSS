import Button from "./components/button";
import Heading from "./components/heading";
import Benefit from "./components/benefits";
import Chips from "./components/chips";
import ActivityCard from "./components/activity-card";

import { BENEFITS } from "./data/benefits.data";
import { ACTIVITIES } from "./data/activities.data";

export function App() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="text-left">
          <Heading text="primary" as="h2" size="display">
            Heading Display
          </Heading>

          <Heading text="primary" as="h2" size="lg">
            Heading LG
          </Heading>

          <Heading text="primary" as="h2" size="md">
            Heading MD
          </Heading>

          <Heading text="primary" as="h2" size="sm">
            Heading SM
          </Heading>
        </div>
      </div>

      <div className="flex h-screen items-center justify-center gap-4">
        <Button color="primary" size="md" shape="rounded">
          Salut
        </Button>

        <Button color="secondary" size="lg" shape="pill">
          Hello
        </Button>

        <Button color="tertiary" size="md" shape="rounded">
          Halo
        </Button>

        <Button color="whitegreen" size="md" shape="rounded">
          Hola
        </Button>
      </div>

      <div className="flex h-screen flex-col items-center justify-center gap-8">
        {BENEFITS.map((benefit) => (
          <Benefit
            key={benefit.label}
            benefit={benefit}
          />
        ))}
      </div>

      <div>
        <Chips>
          2 heures
        </Chips>
      </div>

      <div className="flex justify-center gap-8">
        {ACTIVITIES.map((activity) => (
          <ActivityCard
            key={activity.id}
            activity={activity}
          />
        ))}
      </div>
    </>
  );
}