const Patient = require("../models/Patient");

exports.createPatient = async (req, res) => {
  const patient = await Patient.create(req.body);
  res.json(patient);
};

exports.getPatients = async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
};

exports.getPatient = async (req, res) => {
  const patient = await Patient.findById(req.params.id);
  res.json(patient);
};

exports.updatePatient = async (req, res) => {
  const patient = await Patient.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(patient);
};

exports.deletePatient = async (req, res) => {
  await Patient.findByIdAndDelete(req.params.id);
  res.json({ message: "Patient deleted" });
};