function CourseDetails() {

  const askAI = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/ai/ask",
        {
          question: `I completed ${course && course.title ? course.title : "this course"}.

Suggest the next best courses to learn in order.

For each course give:

1. Course Name
2. Why learn it
3. Difficulty Level
4. Duration estimate
5. Learning order

Keep answer clean, detailed, beginner friendly and properly spaced.`,
        }
      );

      setAnswer(response.data.answer);
    } catch (error) {
      console.log("AI Error:", error);
      alert("AI Failed");
    }
  };

  return (
    <div>
      {/* your JSX */}
    </div>
  );
}

export default CourseDetails;