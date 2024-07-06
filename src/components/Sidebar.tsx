import React, { useState } from 'react';

type SidebarOption = {
  id: number;
  title: string;
  
};

const Sidebar: React.FC = () => {
  const [activeOption, setActiveOption] = useState<number | null>(null);

  const options: SidebarOption[] = [
    { id: 1, title: 'Salary Information' },
    { id: 2, title: 'Personal Information' },
    { id: 3, title: 'Housing' },
    { id: 4, title: 'Income Configuration' },
    { id: 5, title: 'Allowances' },
    { id: 6, title: 'Declaration' },
  ];

  const handleOptionClick = (id: number) => {
    setActiveOption(id);
  };


  const handleNextOption = () => {
    const currentIndex = options.findIndex((option) => option.id === activeOption);
    const nextIndex = currentIndex + 1;
    setActiveOption(options[nextIndex % options.length].id);
  };

  return (
    <div className="flex mt-20 ml-20">
      <div className="bg-gray-800 text-white w-64 flex flex-col">
        <div className="p-4">
        </div>
        <div className="flex-1">
          <nav className="flex flex-col space-y-1">
            {options.map((option) => (
              <div key={option.id} className="relative">
                <button
                  className={`flex items-center justify-evenly gap-3 w-8 h-8 rounded-full border border-gray-400 ${
                    activeOption === option.id ? 'bg-blue-500' : ''
                  } hover:bg-blue-500 hover:border-blue-500`}
                  onClick={() => handleOptionClick(option.id)}
>                  <span className="text-sm font-bold p-2 ">{option.id}</span>
                   <span className='text-sm' >  STEP{option.id}</span>

                </button>
                <a
                  href="#"
                  className={`px-4 py-2 flex items-center hover:bg-gray-700 ${
                    activeOption === option.id ? 'bg-gray-700' : ''
                  }`}
                  onClick={() => handleOptionClick(option.id)}
                >
                  {option.title}
                </a>
              </div>
            ))}
          </nav>
        </div>
      </div>
      
      <div className="flex-1 p-8 bg-gray-100">
        {activeOption !== null && (
          <div className="bg-white shadow-md rounded-md p-4">
            {options.map((option) => (
              activeOption === option.id && (
                <div key={option.id}>
                  <h2 className="text-lg font-semibold mb-4">{option.title}</h2>
                  {option.id === 1 && <SalaryInformationForm onNext={handleNextOption} />}
                  {option.id === 2 && <PersonalInformationForm onNext={handleNextOption} />}
                  {option.id === 3 && <HousingForm onNext={handleNextOption} />}
                  {option.id === 4 && <IncomeConfigurationForm onNext={handleNextOption} />}
                  {option.id === 5 && <AllowancesForm onNext={handleNextOption} />}
                  {option.id === 6 && <DeclarationForm onNext={handleNextOption} />}
                </div>
              )
            ))}
            
            <button
              onClick={handleNextOption}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-gray-600"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const SalaryInformationForm: React.FC<{ onNext: () => void }> = () => {
  return (
    <form>
      <div className="mb-14 flex">
        <div className="flex-1 mr-2">
          <label className="block text-sm font-medium text-gray-700">Cost To Company (CTC Per Annum)</label>
          <input type="text" 
          placeholder='Eg.6000000'
          className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
        </div>
        <div className="flex-1 ml-2">
          <label className="block text-sm font-medium text-gray-700">CTC MOnthly</label>
          <input type="text"  
          placeholder='0'
          className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
        </div>
      </div>
      <div className="flex">
        <div className="flex-1 mr-2">
          <label className="block text-sm font-medium text-gray-700">Basic Salary(per month)</label>
          <input type="text" 
          placeholder='Eg.1800'
          className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
        </div>
        <div className="flex-1 ml-2">
          <label className="block text-sm font-medium text-gray-700">HRA(per month)</label>
          <input type="text" 
          placeholder='Eg.6380'
          className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
        </div>
      </div>
    </form>
  );
};
const PersonalInformationForm: React.FC<{ onNext: () => void }> = () => {
  return (
    <form className="ml-8">
    <div className="mb-8">
      <label className="block text-sm font-medium text-gray-700 mb-2">Age Group</label>
      <div className="flex items-center space-x-4">
        <select
          className="border border-blue-400 rounded-md px-3 py-2 w-1/2"
          defaultValue=""
        >
          <option value="" disabled hidden>Select Age Group</option>
          <option value="less_than_60">Less than 60 years</option>
          <option value="senior_citizen">Senior Citizen (&gt;60 years and &gt;=80 years)</option>
          <option value="super_senior_citizen">Super Senior Citizen (&gt;80 years)</option>
        </select>
      </div>
    </div>
  </form>
   );
};


const HousingForm: React.FC<{ onNext: () => void }> = () => {
  return (
    <form>
       <div className="mb-14 flex">
        <div className="flex- mr-2">
          <label className="block text-sm font-medium text-gray-700">Field 3</label>
          <input type="text" className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
        </div>
        <div className="flex-1 ml-2">
          <label className="block text-sm font-medium text-gray-700">Field 4</label>
          <input type="text" className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
        </div>
      </div>
      <div className="flex">
        <div className="flex-1 mr-2">
          <label className="block text-sm font-medium text-gray-700">Field 3</label>
          <input type="text" className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
        </div>
        <div className="flex-1 ml-2">
          <label className="block text-sm font-medium text-gray-700">Field 4</label>
          <input type="text" className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
        </div>
      </div>
    </form>
  );
};
const IncomeConfigurationForm: React.FC<{ onNext: () => void }> = () => {
  return (
    <form>
       <div className="mb-14 flex">
        <div className="flex-1 mr-2">
          <label className="block text-sm font-medium text-gray-700">Field 3</label>
          <input type="text" className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
        </div>
        <div className="flex-1 ml-2">
          <label className="block text-sm font-medium text-gray-700">Field 4</label>
          <input type="text" className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
        </div>
      </div>
      <div className="flex">
        <div className="flex-1 mr-2">
          <label className="block text-sm font-medium text-gray-700">Field 3</label>
          <input type="text" className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
        </div>
        <div className="flex-1 ml-2">
          <label className="block text-sm font-medium text-gray-700">Field 4</label>
          <input type="text" className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
        </div>
      </div>
    </form>
  );
};
const AllowancesForm: React.FC<{ onNext: () => void }> = () => {
  return (
    <form>
      
      <div className="mb-14 flex">
        <div className="flex-1 mr-2">
          <label className="block text-sm font-medium text-gray-700">Field 3</label>
          <input type="text" className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
        </div>
        <div className="flex-1 ml-2">
          <label className="block text-sm font-medium text-gray-700">Field 4</label>
          <input type="text" className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
        </div>
      </div>
      <div className="flex">
        <div className="flex-1 mr-2">
          <label className="block text-sm font-medium text-gray-700">Field 3</label>
          <input type="text" className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
        </div>
        <div className="flex-1 ml-2">
          <label className="block text-sm font-medium text-gray-700">Field 4</label>
          <input type="text" className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
        </div>
      </div>
      
    </form>
  );
};
const DeclarationForm: React.FC<{ onNext: () => void }> = () => {
  return (
    <form>
      <div className="mb-14 flex">
        <div className="flex-1 mr-2">
          <label className="block text-sm font-medium text-gray-700">Field 3</label>
          <input type="text" className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
        </div>
        <div className="flex-1 ml-2">
          <label className="block text-sm font-medium text-gray-700">Field 4</label>
          <input type="text" className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
        </div>
      </div>
      <div className="flex">
        <div className="flex-1 mr-2">
          <label className="block text-sm font-medium text-gray-700">Field 3</label>
          <input type="text" className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
        </div>
        <div className="flex-1 ml-2">
          <label className="block text-sm font-medium text-gray-700">Field 4</label>
          <input type="text" className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full" />
        </div>
      </div>
    </form>
  );
};



export default Sidebar;
