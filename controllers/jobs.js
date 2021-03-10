import mongoose from 'mongoose';
import Job from '../models/job.js'

export const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        console.log(jobs);
        res.status(200).json(jobs);
    } catch (error) {
        res.status(404).json({ message: error.message})
    }
}

export const createJob = async (req, res) => {
    const job = req.body;
    const newJob = new Job(job)
    try {
        await newJob.save();
        res.status(201).json(newJob);
    } catch (error) {
        res.status(409).json({ message: error.message})
    }
}

export const updateJob = async (req, res) => {
    const { id: _id } = req.params;
    const job = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No job with that ID');
    const updatedJob = await Job.findByIdAndUpdate(_id, { ...job, _id }, { new: true });
    res.json(updatedJob);
}

export const deleteJob = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No job with that ID');
    await Job.findByIdAndRemove(id);
    res.json({ message: 'Job successfully deleted' });
}