function InspirationCollection() {
  return (
    <section className="px-10">
      <div className="text-center">
        <h3>Inspiration Collection</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="flex gap-[40px] justify-center">
        {["", "", ""].map((item, key) => (
          <div className="w-[455px]">
            <img
              key={key}
              src={item === "" ? "https://source.unsplash.com/random" : item}
              alt="clothe"
              className="h-[300px] w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default InspirationCollection;
