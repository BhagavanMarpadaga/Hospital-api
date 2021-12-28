<h1>Hospital-api</h1>
    <ul>
        <li>This is a project to design an API for an Hospital and tested using POSTMAN.</li>
        <li>Tech Stack used: NodeJS,Express,MongoDB.</li>
    </ul>
<h1>Problem Statement</h1>
    <p>Design an API for the doctors of a Hospital which has been allocated by the govt for testing and quarantine +
        well being of COVID-19 patients</p>
    <h1>Features Required</h1>
    <ul>
        <li><b>Doctors log in</b></li>
        -API to register a doctor</br>
        -URL [POST] : /api/v1/doctor/register</br>
        -API to log in a doctor</br>
        -URL [POST] : /api/v1/doctor/login</br>
        <li><b>Patient registration</b></li>
        -API to register a Patient</br>
        -URL [POST] : /api/v1/patient/register</br>
        <li><b>Report generation</b></li>
        -API to generate a Patient Report</br>
        -URL [POST] : /api/v1/patient/:id/create_report</br>
        -API to get all reports of a Patient</br>
        -URL [GET] : /api/v1/patient/:id/all_reports</br>
        -API to get reports of all the patients filtered by a specific status</br>
        -URL [GET] : /api/v1/reports/:status</br>
    </ul>
    <h1>Git Clone</h1>
    <p>To use this repository in your local system-</p>
    <p>git clone https://github.com/BhagavanMarpadaga/Hospital-api.git</p>
