import React, { useState } from 'react'
import AutoCompleteText from './AutoCompleteText'

const MySemesterCourses = ({allCourses, setSemCourse}) => {
    const [showAutocomplete, setShowAutocomplete] = useState(false)
  return (
    <td style={{ height: "25px" }} onClick={() => setShowAutocomplete(true)}>
     {showAutocomplete && <AutoCompleteText items={allCourses} setCourse={setSemCourse} />}
    </td>
  )
}

export default MySemesterCourses