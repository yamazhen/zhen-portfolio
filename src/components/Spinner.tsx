export default function Spinner({
  size = "w-8 h-8",
  color = "border-blue-500",
} = {}) {
  return (
    <div
      className={`${size} ${color} border-2 border-t-transparent rounded-full animate-spin`}
    ></div>
  );
}
