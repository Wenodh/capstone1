import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText('Book Now');
    expect(headingElement).toBeInTheDocument();
});

test('renders "Choose date" text', () => {
    const bookingData = { date: '', time: '', guests: '', occasion: '' };
    const availableTimes = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
    ];
    const initializeTimes = jest.fn(() => [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
    ]);
    render(
        <BookingForm
            bookingData={bookingData}
            availableTimes={availableTimes}
            initializeTimes={initializeTimes}
        />
    );

    const chooseDateText = screen.getByText('Choose date');
    expect(chooseDateText).toBeInTheDocument();
});

test('updateTimes return correct time options', () => {
    const updateTimes = jest.fn();
    const initializeTimes = jest.fn();
    const availableTimes = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
    ];
    const updatedTimes = ['17:00', '18:00', '19:00'];

    const bookingData = {
        date: '2022-03-01',
        time: '',
        guests: '',
        occasion: 'Default',
    };

    const setBookingData = jest.fn();
    const submitForm = jest.fn();

    render(
        <BookingForm
            availableTimes={updatedTimes}
            initializeTimes={initializeTimes}
            updateTimes={updateTimes}
            bookingData={bookingData}
            setBookingData={setBookingData}
            submitForm={submitForm}
        />
    );

    const dateInput = screen.getByLabelText('Choose date');
    fireEvent.change(dateInput, { target: { value: '2022-03-02' } });

    expect(updateTimes).toHaveBeenCalledTimes(1);
    expect(updateTimes).toHaveBeenCalledWith(new Date('2022-03-02'));

    const timeSelect = screen.getByLabelText('Choose time');
    expect(timeSelect.children.length).toBe(updatedTimes.length + 1); // +1 for the default option

    const timeOptions = timeSelect.children;
    expect(timeOptions[1]).toHaveTextContent('17:00');
    expect(timeOptions[2]).toHaveTextContent('18:00');
});

test('initializeTimes', () => {
    const initialTimes = ['13:00', '14:00', '17:00', '18:00'];
    const updateTimes = jest.fn();
    const initializeTimes = jest.fn();

    const bookingData = {
        date: '2022-03-01',
        time: '17:00',
        guests: '3',
        occasion: 'Default',
    };

    const setBookingData = jest.fn();
    const submitForm = jest.fn();

    render(
        <BookingForm
            availableTimes={initialTimes}
            initializeTimes={initializeTimes}
            updateTimes={updateTimes}
            bookingData={bookingData}
            setBookingData={setBookingData}
            submitForm={submitForm}
        />
    );

    fireEvent.click(screen.getByTestId('submitBtn'));
    expect(initializeTimes).toHaveBeenCalledTimes(1);
});
