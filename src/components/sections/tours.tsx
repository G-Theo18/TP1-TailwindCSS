import Heading from "../heading";
import ActivityCard from "../activity-card";
import { Carrousel } from "../carrousel";
import { ACTIVITIES } from "../../data/activities.data";

export default function Tours() {
    return (
        <div className="py-20">
            <div className="my-10 left-32">
                <Heading text="green" as="h1" size="lg">
                    Composez votre voyage
                </Heading>
            </div>

            <Carrousel
                items={ACTIVITIES}
                render={(activity) => (
                    <li key={activity.id}>
                        <ActivityCard activity={activity} />
                    </li>
                )}
            />
        </div>
    );
}