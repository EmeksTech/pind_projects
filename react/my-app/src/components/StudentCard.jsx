function StudentCard({name, course, score} ) {

  return (
    <article>
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">Course: {course}</p>
      <p className="text-gray-600">Score: {score}</p>
      <p className="text-gray-600">Grade: {score >= 50 ? "Passed" : "Failed"}</p>
    </article>
  );
}

export default StudentCard;