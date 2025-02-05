import React from 'react'

const Categories = () => {
  return (
    <>
    <div className='flex flex-col items-center p-10'>
        <div className=' w-fit h-fit text-sm bg-red-400 rounded-full px-[5px] my-2'><h1>6 Categories | 1000+ Shops</h1></div>
        <h1 className='text-3xl font-bold mt-2'>You Need It? Tap It! All Your Daily Essentials from Trusted Nearby Stores, Right at Your Fingertips.</h1>
    </div>
    <div className='flex flex-wrap gap-5 justify-center px-20'>
        <div className="card bg-[#FFB800] text-primary-content w-80 h-52">
            <div className="card-body flex flex-col gap-8">
                <h2 className="card-title">Grocery</h2>
                <div className='flex items-center justify-between'>
                    <div className=' w-fit h-fit text-sm bg-[#FAFAFA26] rounded-full px-[5px] my-2'><h1>100+ Shops</h1></div>   
                    <img className='w-28 h-auto flex-end' src="https://s3-alpha-sig.figma.com/img/4883/6001/0f7def6de2dac1fdd6914bf434e2024f?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WgztIW5fMPvrFr420G4ZeF8A1RxiiFjhK-kIkLfIHtCOi7EWx00yP~mxalF3Z3wmg2mYJUWHifDRMJtjB9egUfoh2jXaZS2ZwlhbgtQStiPuMcyQa4PVEilWTcbsbUBmaIjeoCL3aosKSEl6O4uv~lhGBUU5x5umaTcQ95qU0x1LZ3u8IAnMt4xtqFoMcv4koGtANSsSuBYtdzFxXJ6i8Nseg63XAiytw6xjeGmpdauqkdzzwiLsS7q19I~djX0Gi6D2QgmuFTsibPZbM310otuWUNa5mhXrdGVE43eYl41kQr9Ht7UR5NsuxZcA4ITM-Q~qW49WE~BSNfALZM-Jzw__" alt="" />
                </div>
            </div>
        </div>
        <div className="card bg-[#E72019] text-primary-content w-80 h-52">
            <div className="card-body flex flex-col gap-8">
                <h2 className="card-title">Resturant</h2>
                <div className='flex items-center justify-between'>
                    <div className=' w-fit h-fit text-sm bg-[#FAFAFA26] rounded-full px-[5px] my-2'><h1>100+ Shops</h1></div>   
                    <img className='w-28 h-auto flex-end' src="https://s3-alpha-sig.figma.com/img/140b/1af5/18f3dee03544971fc29ffdcffed25ebe?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qholv-shIeSthnPWZ7b0n6e4ojba-c12uKi-6FKiRkfhhyCqxVjw3AcafZdhywMWJ2kkf7cqBf-siiD0ysSv9LWVzKG~x-MMfzsnYITAqLf7aUOEFmzLtbM74Zv9ikL9HvGiq5Z~hIOnhgylioUXsl-uAd2YMtcnrxoVSB2Fd-LulY0Lg6L4HOYhSIbXNdVbiha3p~VO0TLGE9e138Xxllf2rQEmtWsaxLnhoO55uFlmvS3Y1TtCMx0nUXccwosPmg8F9RGnAWEReC2yTQJIDqDuyqZOr420A9-kGuQp3Uz9SHSPBCig2zvn-9IcSfpMB3Zyk2U-jm16Cy2a62KQYw__" alt="" />
                </div>
            </div>
        </div>
        <div className="card bg-[#71A43D] text-primary-content w-80 h-52">
            <div className="card-body flex flex-col gap-8">
                <h2 className="card-title">Vegetables</h2>
                <div className='flex items-center justify-between'>
                    <div className=' w-fit h-fit text-sm bg-[#FAFAFA26] rounded-full px-[5px] my-2'><h1>100+ Shops</h1></div>   
                    <img className='w-auto h-24 flex-end' src="https://s3-alpha-sig.figma.com/img/380a/a983/8741b4f32455bd8e112c7b635dd72c0b?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XC-yoAnWaxVzufdBHgeEQ09w08YtDvbPQqVrck~Anclrnp3errM5PyYp3D8ASQA8PNa-s4xhSLnPW7TctUU1f-3FPA5-iBhrWGmYT1he5~0SYMpKPba2dVhrDGmEbB94Qbn-5z2NecVGvlW0oehu3xmbwU3~jSeaNMSv~Sr1aPJG3qTyYu-WHUmzsTG6LvmavJi6kOXl3zYUPJ1~JZTd0K3JJzJ38fOwZkSY-EmXe9nfuTOwCYiuwQIML3nwoOMSrTjXPaxbjrtxI0Iea9CQNsjGfiWSRLombJy7WiZ0-iUPg411chJoQw~kNb42HBco1mwaNI~YN4miK0o0a~~R9Q__" alt="" />
                </div>
            </div>
        </div>
        <div className="card bg-gradient-to-b from-[#FCC022] to-[#E72019] text-primary-content w-80 h-52">
            <div className="card-body flex flex-col gap-8">
                <h2 className="card-title">Stationary</h2>
                <div className='flex items-center justify-between'>
                    <div className=' w-fit h-fit text-sm bg-[#FAFAFA26] rounded-full px-[5px] my-2'><h1>100+ Shops</h1></div>   
                    <img className='w-auto h-24 flex-end' src="https://s3-alpha-sig.figma.com/img/8982/e0c2/2d26224e1d2d48acd7a9e82a675249ea?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=S3my0VWNSvKfcObxrkXvNVBhTtsDBTAAQiq6jS-QtXMzFbay7n2y~ssj7J-pfzL4bIeYgNytxgCo-dwerZnX~WWNmT42dWiOqMjuYsiCNANXKrmUob3BKSbw1134SkwTdqV06b5GszJQCF-vL01ho678TzelwtotZI8AjFuA705owHhpFbh6-YL8AqfBjNv~gedg~l1-ymS5kuEQC42QG5gVevNf2J9XAVDA6xMo9s2YGOlOV9~Vyvc59B34xcX-haOGIIs7q4EW1KUlwc7M0YbJKC~1aeV2RvZMExlXfldjYqxxZRp-J-mC5sSkJZ3x3pbDvinTy02UKUiOzimNtw__" alt="" />
                </div>
            </div>
        </div>
        <div className="card bg-[#4364F7] text-primary-content w-80 h-52">
            <div className="card-body flex flex-col gap-8">
                <h2 className="card-title">Electronics</h2>
                <div className='flex items-center justify-between'>
                    <div className=' w-fit h-fit text-sm bg-[#FAFAFA26] rounded-full px-[5px] my-2'><h1>10+ Shops</h1></div>   
                    <img className='w-auto h-28 flex-end' src="https://s3-alpha-sig.figma.com/img/0e88/89a9/b95964a27458b67f67a5396520dc39cd?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZBaKPrpaq~KdvWwYDIZMI35L05QLsDt0c31BcdYR8ojIzD573By3Ode0SdjzgFijTV1HeJrnuMb95hA--3oQIJGiOa40n82EieB8j7PYf8SSfqSNJ-6lB8SAo~PfOv~Om2Z5vDvUx1GqAGx9X7jKzzRzKjX2iMsfMLxHL~jS0Pon~JxtA4A-d9-LnWe5VC6363c1OMhxF883i4Spoj0zGy79VPIdo3V8RAYt6sVNiYPoeS3RxPrvM9q546ydcXqcZShdh-dt9ONROnr~PqIxvdnwy-lEa3miS3YAhqmWNhiyuyhhEwb2RRJFnPMWO0sIwJ~rZ6OGgcc9pL9gC8~-XA__" alt="" />
                </div>
            </div>
        </div>
        <div className="card bg-[#B51957] text-primary-content w-80 h-52">
            <div className="card-body flex flex-col gap-8">
                <h2 className="card-title">Fish/Meat</h2>
                <div className='flex items-center justify-between'>
                    <div className=' w-fit h-fit text-sm bg-[#FAFAFA26] rounded-full px-[5px] my-2'><h1>10+ Shops</h1></div>   
                    <img className='w-28 h-auto flex-end' src="https://s3-alpha-sig.figma.com/img/79f7/38aa/dbb81b52257d14d154eefe6b26dee624?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=U0~zu7kIo-V~P-FvpQPkSpLpfbGH3~e9S76kxi40TXuPPg~8wS8ieI6Mjiq49MDqzw7hiqnIKpVI~lf5jgD5M4wdNVHHvzjXvxmYkdtphT3dtdYpeQ5UiOQ0-9nfO~~yjDd1198jXbz1yjk3EZyFOOj1RpHkjaDgK8tjPeB60Qcbs2wMQu7O6HgMgpneVQI~eBHOLv68uyFp9PaObbX5uU1Y2oWaIymLQXR4byp9E3c2gJE5MlZ50IhujSPx0ke1PDq2ndwTPa5TXy12CqWih6HwKw-zKoRHqHSLyuPIgSkfbqlAXP-sfy4GTwiqURzT07EPWfXj5LZ4zBdBug39Qg__" alt="" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Categories