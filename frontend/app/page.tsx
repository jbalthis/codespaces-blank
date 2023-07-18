const Home = () => {
  return (
    <main className="p-10 container mx-auto">
      <div className="block my-5 text-3xl font-sans text-grayDark">
        HeadingText
      </div>
      <div className="flex flex-row gap-5 block font-sans">
        <div className="basis-1/3 p-5 w-full h-full bg-grayLight rounded-md border border-dark-500">
          <div>
            "Look, folks, I'm not going to lie to you. This is some of the best
            Lorem ipsum you'll ever see. It's bigly, it's beautiful, and it's
            going to make your design look great. Believe me.
          </div>
        </div>
        <div className="basis-1/3 p-5 w-full h-full bg-grayLight rounded-md border border-dark-500">
          <div>
            "I know Lorem ipsum, believe me, I know it better than anyone. I've
            used it in my speeches, I've used it in my tweets, and I've used it
            in my business deals. And I can tell you, this is the best Lorem
            ipsum there is.
          </div>
        </div>
        <div className="basis-1/3 p-5 w-full h-full bg-grayLight rounded-md border border-dark-500">
          <div>
            "So if you're looking for Lorem ipsum that's going to make your
            design look great, then you need to use this. It's the best, believe
            me."
          </div>
        </div>
      </div>
      <div className="py-10 block">
        <div className="font-cursive block text-5xl">
          I know Lorem ipsum, believe me, I know it better than anyone.
        </div>
      </div>
    </main>
  );
};
export default Home;
