import { startOfHour } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import Appointment from '../models/Appointment';

interface Request {
    provider: string;
    date: Date;
}

class CreateAppointmentService {
    private appointmentsRepository: AppointmentsRepository;

    constructor(appointmentRepository: AppointmentsRepository) {
        this.appointmentsRepository = appointmentRepository;
    }

    public execute({ date, provider }: Request): Appointment {
        const appointmentDate = startOfHour(date);

        const findAppointmentInSameDate = this.appointmentsRepository.findByDate(
            appointmentDate,
        );

        if (findAppointmentInSameDate) {
            throw Error('This appointmnet is already booked');
        }

        const appointment = this.appointmentsRepository.create({
            provider,
            date: appointmentDate,
        });

        return appointment;
    }
}

export default CreateAppointmentService;
