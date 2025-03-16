import { Calendar, Clock, MapPin, Users, UserCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

interface EventProps {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: {
    type: 'online' | 'offline';
    location?: string;
  };
  posterUrl: string;
  registrationLink?: string;
  isPast?: boolean;
  attendeeCount?: number;
  hosts: {
    main: {
      name: string;
      role?: string;
    };
    coHosts?: Array<{
      name: string;
      role?: string;
    }>;
  };
}

const EventCard = ({ event }: { event: EventProps }) => {
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-square relative">
        <img
          src={event.posterUrl}
          alt={event.title}
          className="object-cover w-full h-full"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
        
        <div className="space-y-2">
          {/* Hosts Section */}
          <div className="flex items-center gap-2">
            <UserCircle className="w-4 h-4" />
            <div className="text-sm">
              <span className="font-medium">Host:</span> {event.hosts.main.name}
              {event.hosts.main.role && <span className="text-muted-foreground"> ({event.hosts.main.role})</span>}
            </div>
          </div>
          
          {/* Only show co-hosts section if there are co-hosts */}
          {event.hosts.coHosts && event.hosts.coHosts.length > 0 && event.hosts.coHosts.some(host => host.name !== event.hosts.main.name) && (
            <div className="flex items-center gap-2">
              <UserCircle className="w-4 h-4 opacity-70" />
              <div className="text-sm">
                <span className="font-medium">Co-host{event.hosts.coHosts.length > 1 ? 's' : ''}:</span>{' '}
                {event.hosts.coHosts
                  .filter(coHost => coHost.name !== event.hosts.main.name) // Filter out main host if listed in co-hosts
                  .map((coHost, index, filteredHosts) => (
                    <span key={index}>
                      {coHost.name}
                      {coHost.role && <span className="text-muted-foreground"> ({coHost.role})</span>}
                      {index < filteredHosts.length - 1 ? ', ' : ''}
                    </span>
                  ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">
              {event.venue.type.charAt(0).toUpperCase() + event.venue.type.slice(1)}
              {event.venue.location && ` - ${event.venue.location}`}
            </span>
          </div>
          {event.isPast && event.attendeeCount && (
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="text-sm">{event.attendeeCount} Attendees</span>
            </div>
          )}
        </div>
      </CardContent>
      
      {!event.isPast && event.registrationLink && (
        <CardFooter className="p-4 pt-0">
          <Button asChild className="w-full">
            <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
              Register Now
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default EventCard;
