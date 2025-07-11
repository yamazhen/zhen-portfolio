const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/files/zhen_resume.pdf";
  link.download = "zhen_resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default downloadResume;
