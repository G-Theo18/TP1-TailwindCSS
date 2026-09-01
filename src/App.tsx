import Button from "./components/button";

export function App() {
  return (
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

	    <Button>
        Hola
      </Button>
    </div>
  );
}