
import './App.css'

import Card from './Component/Card'
import Mahak from './Component/Mahak';
import Navebar from './Component/Navebar';

export default function () {


  const jobs = [
    {
      brandLogo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/500px-Google_%22G%22_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
      name: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hour",
      location: "Bengaluru, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxSeqWeNvOIJ8B6xuaGYtbeApgG2bAQieBFGkMelwnpYA3zuxJ9YE830&s=10",
      name: "Microsoft",
      datePosted: "2 weeks ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$55/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
      name: "Amazon",
      datePosted: "1 week ago",
      post: "Java Backend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$40/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://cdn.simpleicons.org/meta",
      name: "Meta",
      datePosted: "3 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$60/hour",
      location: "Gurugram, India"
    },
    {
      brandLogo: "https://thumbs.dreamstime.com/b/apple-company-logo-vector-printable-mobile-laptop-stickers-cups-mugs-182823911.jpg",
      name: "Apple",
      datePosted: "10 weeks ago",
      post: "iOS Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$48/hour",
      location: "Bengaluru, India"
    },
    {
      brandLogo: "https://i.pinimg.com/564x/6f/74/7d/6f747d293ac1569b41f12d6836837627.jpg",
      name: "Netflix",
      datePosted: "2 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://iprsoftwaremedia.com/219/files/202512/692f50633d6332b6efbbc605_nvidia-logo-vert-wht/nvidia-logo-vert-wht_prv.png?v=0a06dca9-ab55-462d-97ea-f90ed9844e39",
      name: "NVIDIA",
      datePosted: "6 days ago",
      post: "AI/ML Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$50/hour",
      location: "Pune, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4xaDZVJ_RgARGRLyStN6ta0GR3WMgatEGwfnd8bHurZ8jBfK8tyw1TzCh&s=10",
      name: "Adobe",
      datePosted: "4 weeks ago",
      post: "UI/UX Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$42/hour",
      location: "Noida, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAszQQjdG3IlQx0QUlSMb08YtWHrTEbfMdQ6G3xh2e1w&s=10",
      name: "Oracle",
      datePosted: "3 weeks ago",
      post: "Java Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$38/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0wvUEcLSv1mcKvgpbhH84rjtwIN0A3fi3fYskydMbSA&s=10",
      name: "IBM",
      datePosted: "1 day ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$52/hour",
      location: "Chennai, India"
    }
  ];

  return (
    <>
    <Navebar/>
      <div className="parent">
        {
          jobs.map((value, index) => (
            <div key={index}>
              <Card logo={value.brandLogo} name={value.name} date={value.datePosted}
                post={value.post} tag1={value.tag1} tag2={value.tag2} pay={value.pay} location={value.location}
              />
            </div>
          ))
        }

      </div>

  
    </>
  )

}
