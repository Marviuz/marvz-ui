import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './card';

export default function CardExample() {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>
          Kimi no Koto ga Daidaidaidaidaisuki na 100-nin no Kanojo
        </CardTitle>
        <CardDescription>
          Rentarou Aijou has it all: looks, intelligence, athletic skill, and
          popularity with peers and mentors alike. Unfortunately, none of these
          qualities help Rentarou with his love life. On the day of his middle
          school graduation, he is once again turned down by a girl he confesses
          to, earning his one-hundredth rejection in a row. Down on his luck, he
          goes to a matchmaking shrine and wishes to finally get a girlfriend in
          high school.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          When the god of the shrine suddenly appears before him, Rentarou is
          told he will meet an astronomical total of one hundred soulmates in
          high school. Though Rentarou initially does not take this foretelling
          seriously, his doubts disappear when, on the first day of school, he
          meets two of these soulmates—Hakari Hanazono and Karane Inda—who both
          confess to him. With fated encounters and love confessions galore,
          Rentarou&apos;s life is about to get a lot more exciting.
        </p>
      </CardContent>
    </Card>
  );
}
