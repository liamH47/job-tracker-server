import mongoose from 'mongoose';

const jobSchema = mongoose.Schema({
    company : String,
    creator: String,
    industry: String,
    role: String,
    applied: {
        type: Date,
        default: new Date() 
    },
    effort: {
        type: Number,
        default: 0
    },
    notes: [String],
    status: {
        type: String,
        default: "Preparing"
    },
    followed_up: {
        type: Boolean,
        default: false
    },
    index: Number
});

const Job = mongoose.model('Job', jobSchema);

export default Job;
/*
{
  Companyname: string,
  Industry: string,
  Role: string,
  Application date: date,
  Effort value: number 1-5,
  Followed up?: boolean
  Follow up dates: [], (is array of dates possible?)
  Notes: [],
  Application status: string,  (there will be a dropdown w choices for this)
     Also, application status should probably have something to do with the names of the droppable columns
  First response: date, (maybe needs to start as null)
   
}
*/