import CoverImg from '../../images/illustration-intro.png';

export default function Cover() {
    return (
        <section id='cover'>
            <div className='container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0'>
                <div className='flex flex-col space-y-10 lg:mt-16 lg:w-1/2'>
                    <h1 className='mt-6 text-3xl font-bold text-center lg:text-6xl lg:text-left'>TECHNOLOGY FOR YOUR BUSINESS DEVELOPMENT</h1>
                    <p className='max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0'>
                    Advanced Website Development, Mobile Applications, API-Ready Platform, Microservice Ecosystem, Omni-channel Integration.
                    </p>
                </div>
                <div className='relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2'>
                    <img src={CoverImg} alt="illustration" className='relative z-10 lg:top-24 xl:top-0 overflow-x-visible' />
                </div>
            </div>
        </section>
    )
}