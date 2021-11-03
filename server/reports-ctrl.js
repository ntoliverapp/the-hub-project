
const reports = require('./reports.json');
let globalId = reports[reports.length - 1].id + 1;

module.exports = {
    getAllReports: (req, res) => {

        res.status(200).send(reports)
        },
    addReport: (req, res) => {
        // console.log('hit add reports')
        const{firstName, lastName, organization, date, hours, contacts, yesId, volunteer, optInText, optInEmail, highlights, challenges} = req.body

        const newReport = {
            firstName, 
            lastName,
            organization,
            date,
            hours,
            contacts, 
            yesId, 
            volunteer,
            optInText, 
            optInEmail, 
            highlights,
            challenges,
            id: globalId
        }
        
        reports.push(newReport);
        res.status(200).send(reports);
        globalId++;
    }, 
    getSubmitResponse: (req, res) =>{
        const submit = ["Your response has been submitted!"]
        res.status(200).send(submit);
}};
