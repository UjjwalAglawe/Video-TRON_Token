import React from 'react';
import Ar from '../assests/Ar.svg';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { TonConnectButton } from '@tonconnect/ui-react';

function First({ loading }) {
    return (
        <div className='text-white flex justify-around items-center pt-15 min-h-screen'>
            <div className='mb-16'>
                <h1 className='font-semibold text-6xl'>
                    View and Create<br />
                    <span className='font-thin text-sky-400'> Video NFTs </span>
                </h1>
                <p className='pt-8 text-xl font-thin'>
                    Create and Watch Video NFTs <br />

                </p>
                <Link to="/home">
                    <button
                        type="button"
                        className="text-white mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                        Explore All
                    </button>
                </Link>
                {/* <div>
          <TonConnectButton />
        </div> */}
            </div>
            <div>
                <img src={Ar} alt="AR Illustration" className='h-[490px]' />
            </div>
        </div>
    );
};

export default First;