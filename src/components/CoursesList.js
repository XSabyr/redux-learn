import { Link } from 'react-router-dom';
import React from 'react';
import { GetCourses } from '../data';
import CoursesListItem from './CoursesListItem';

const CoursesList = () => {
  const courses = GetCourses();

  return (
    <div>
      <ul style={{ listStyleType: 'none' }}>
        {courses.map((course) => {
          return (
            <li key={course.id} style={{ marginBottom: '15px' }}>
              <Link to={`course/${course.id}`} style={{ textDecoration: 'none' }}>
                <CoursesListItem course={course} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CoursesList;
