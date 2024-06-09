import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Course } from '../entities/Course';

export const CreateCourse = async (req: Request, res: Response): Promise<void> => {
  const CourseRepository = getRepository(Course);
  const { title, image_src } = req.body;
  try {
    const newCourse = CourseRepository.create({ title, image_src });
    await CourseRepository.save(newCourse);
    res.status(201).json({ message: 'Course created successfully', userId: newCourse.id });
  } catch (error) {
    res.status(500).json({ error: error});
  }
};

export const DeleteCourseById = async(req: Request, res: Response): Promise<void> => {
  const CourseRepository = getRepository(Course);
  const { id } = req.body;
  try {
    await CourseRepository.createQueryBuilder()
                                        .delete()
                                        .from(Course)
                                        .where("id = :id", {id: id})
                                        .execute();
    res.status(201).json({ message: 'Course delete successfully', id: id });
  } catch (error) {
    res.status(500).json({error: error})
  }
}

export const FindAllCourses = async (_req: Request, res: Response): Promise<void> => {
  const CourseRepository = getRepository(Course);
  try {
    const data = await CourseRepository.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}