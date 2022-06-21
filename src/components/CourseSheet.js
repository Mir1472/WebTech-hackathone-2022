import React, { useEffect, useState } from "react";
import AutoCompleteText from "./AutoCompleteText";
import courses from "./listCourses";
import MySemesterCourses from "./MySemesterCourses";

const CourseSheet = ({ semInfo }) => {
  const [semcourse, setSemCourse] = useState([]);
  const [allSelectedCourses, setAllSelectedCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    const ThisSemCourses = courses.filter((c) => c.semester === semInfo.sno);
    setAllCourses(ThisSemCourses);

    return () => {};
  }, [courses]);

  useEffect(() => {
    if (semcourse.length > 0) {
      console.log(semcourse, "in app"); //
      const index = allCourses.findIndex((eachCourse) =>
        semcourse.some(
          (semesterCourse) => eachCourse.courseid === semesterCourse.courseid
        )
      );

      if (index > -1) {
        allCourses.splice(index, 1);
      }
      console.log(allCourses, "after del");
      setAllCourses([...allCourses]);
    }
    return () => {};
  }, [semcourse]);

  return (
    <>
      <tr>
        <th colspan="3" style={{ fontWeight: "bold" }}>
          {semInfo.name} Semester
        </th>
      </tr>

      {allSelectedCourses.length > 0 &&
        allSelectedCourses.map((course) => (
          <tr>
            <td>{course?.code}</td>
            <td>{course?.title}</td>
            <td>{course?.crhr}</td>
          </tr>
        ))}
      {allCourses.length > 0 && (
        <tr>
          <td>{allCourses?.code}</td>
          <MySemesterCourses
            allCourses={allCourses}
            setSemCourse={(data) => {
              setSemCourse([data]);
              setAllSelectedCourses([...allSelectedCourses, data]);
            }}
          />

          <td>{allCourses?.crhr}</td>
        </tr>
      )}
    </>
  );
};

export default CourseSheet;
