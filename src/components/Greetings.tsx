type GreetingsProps = {
  name: string;
  mark: string;
};

export default function Greetings({ name, mark }: GreetingsProps) {
  return (
    <div>
      {name} {mark}
    </div>
  );
}
