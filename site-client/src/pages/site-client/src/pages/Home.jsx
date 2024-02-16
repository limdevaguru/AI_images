  }

  return (
    <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">{title}</h2>
    <h2 className="mt-5 font-bold text-[#878787] text-xl uppercase">{title}</h2>
  );
};

@@ -19,11 +19,11 @@ const Home = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <section className="max-w-7xl mx-auto">
    <section className="max-w-7xl mx-auto ">
      {/* Title */}
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          The AI Image Community with DALL-E AI
        <h1 className="font-extrabold text-white text-[40px]">
          The AI Image Community with DALL-E
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Browse through a collection of imaginative and visually stunning
@@ -32,9 +32,9 @@ const Home = () => {
      </div>

      {/* Search form field */}
      <div className="mt-16">
      <div className="mt-16 text-white">
        <h6>Search Images</h6>
        <FormField
          labelName="Search posts"
          type="text"
          name="text"
          placeholder="Search here..."
