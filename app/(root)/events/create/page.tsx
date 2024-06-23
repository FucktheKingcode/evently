import EventForm from "@/components/shared/EventForm"
import { auth } from "@clerk/nextjs"

const CreateEvent = () => {
    const { sessionClaims } = auth();

    const userId = sessionClaims?.userId as string;


    return (
        <>
            <section className=" bg-primary-50 bg-dotted-pattern bg-cover py-10 bg-center">
                <h3 className="max-w-7xl mx-auto p-5 px-10 w-full h-3 text-center font-bold">Create Event</h3>
            </section>
            <div className=" wrapper my-8">
                <EventForm userId={userId} type="Create" />
            </div>
        </>

    )
}

export default CreateEvent