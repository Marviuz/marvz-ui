import { Star } from 'lucide-react';
import Image from 'next/image';
import { profileImage } from '~/assets/images';
import { Card, CardContent } from '~registry/card/card';
import { quotes } from '../../lib/quotes';

export function LandingTestimonial() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Loved by
            <del className="px-2 text-2xl font-medium italic">developers</del>
            Marviuz
          </h2>
          <p className="text-muted-foreground text-xl">
            See what
            <del className="px-2 text-base font-medium italic">
              the community
            </del>
            Marviuz is saying
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {quotes.map((testimonial, i) => (
            <Card key={i}>
              <CardContent className="flex flex-col justify-between">
                <div className="mb-4">
                  <div className="mb-2 flex text-yellow-400">
                    {Array.from(Array(5)).map((_, ratingIdx) => (
                      <Star className="h-4 w-4 fill-current" key={ratingIdx} />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    alt="Marviuz Profile Image"
                    className="h-10 w-10 rounded-full object-cover"
                    src={profileImage}
                  />
                  <div>
                    <div className="font-semibold">Marviuz</div>
                    <div className="text-muted-foreground text-sm">
                      Some random developer
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
