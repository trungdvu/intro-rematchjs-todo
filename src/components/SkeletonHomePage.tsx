export default function SkeletonHomePage() {
  return (
    <div className="mt-[2%] flex flex-col items-center justify-between animate-pulse duration-75">
      <div className="h-24 bg-white-brd w-72" />
      <div className="mt-5 h-[88px] w-[32rem] bg-white-brd" />
      <div className="mt-5 h-[88px] w-[32rem] bg-white-brd" />
      <div className="h-40 w-[32rem] bg-white-brd" />
    </div>
  );
}
