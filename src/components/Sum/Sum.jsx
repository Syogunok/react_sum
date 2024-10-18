export const Sum = ({ comment, a = 0, b = 0 }) => (
  <div>
    <p>{comment}</p>
    <p>{a + b}</p>
  </div>
);
