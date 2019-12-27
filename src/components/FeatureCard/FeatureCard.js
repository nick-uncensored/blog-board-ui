import React from 'react'
import './FeatureCard.scss'




const Feature = (props) => {
    let topics = ["blog", "podcast", "social", "video"]
   return topics.map((topic, i) => {
        return (
                <div key={i} className="card">
                <div className="topic">
                    <h4>
                        {topic}
                    </h4>
                </div>
                <span className="feature">
                <p>
                    Some short words on call to action
                </p>
                </span>
                <button>Begin</button>
            </div>
        )
    })
}

const FeatureCard = (props) => {
    return <div className="cards"><Feature /></div>
}

export default FeatureCard