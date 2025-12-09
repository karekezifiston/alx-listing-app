import Card from "../components/common/Card";
import Button from "../components/common/Button";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to ALX Listing App</h1>

      <Button label="Example Button" onClick={() => alert("Clicked!")} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        <Card 
          title="Modern Apartment"
          price={90}
          location="Kigali, Rwanda"
          image="/assets/house1.jpg"
        />
      </div>
    </main>
  );
}
