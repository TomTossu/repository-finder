interface Repository {
  name: string;
  description: string;
  stargazers_count: number;
  forks: number;
  open_issues: number;
}

const Card = ({
  language,
  repository,
  error,
  onRefetch,
}: {
  language: string;
  repository: Repository | null;
  error: boolean;
  onRefetch: () => void;
}) => {
  const boxLabel = language
    ? 'Loading, please wait...'
    : 'Please select a language';

  const bgColor = error ? 'bg-red-500' : 'bg-gray-200';

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      {!repository && (
        <span
          className={`p-[40px] ${bgColor} rounded-lg text-center w-[300px]`}>
          {error ? 'Error fetching repositories' : boxLabel}
        </span>
      )}
      {repository && (
        <div
          className={`p-[20px] bg-white border-2 border-black rounded-lg flex flex-col gap-4 w-[300px]`}>
          <h1 className='text-2xl'>{repository.name}</h1>
          <p className='text-sm'>{repository.description}</p>
          <div className='flex justify-between'>
            <span className='text-sm'>{language}</span>
            <span className='text-sm'>{repository.stargazers_count}</span>
            <span className='text-sm'>{repository.forks}</span>
            <span className='text-sm'>{repository.open_issues}</span>
          </div>
        </div>
      )}
      <button
        onClick={onRefetch}
        className='p-[15px] bg-black text-white rounded-md w-full hover:bg-gray-800'>
        {error ? 'Try Again' : 'Refresh'}
      </button>
    </div>
  );
};

export default Card;
