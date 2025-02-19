const Card = ({ repository }: { repository: unknown }) => {
  console.log(repository);
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <span className='p-[40px] bg-gray-200 rounded-lg w-full text-center'>
        Please select a language
      </span>
      <button className='p-[15px] bg-gray-200 rounded-md w-full'>Go</button>
    </div>
  );
};

export default Card;
