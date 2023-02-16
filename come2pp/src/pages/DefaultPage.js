import React from 'react'
import { useNavigate } from 'react-router-dom'

function DefaultPage() {
  const navigate = useNavigate();
  const toAdmin = () => {
    navigate('/main')
  }

  return (
    <div class='bg-gray-400 h-screen flex justify-center'>
      <div class="overflow-y-auto overflow-x-auto bg-white h-auto w-auto max-w-xl align-middle m-auto rounded-2xl pb-2 shadow-2xl">
        <div class='flex justify-center mt-6'>
          <div class='text-3xl'>모여라 P.P</div>
        </div>
        <div class='flex justify-center mt-5'>
          <div class='text-lg'></div>
        </div>
        <div class='flex justify-center'>
          <div class='text-lg'> 쾌적한 건물이 어디지?🤷‍♂️ </div>
        </div>
        <div class='flex justify-center'>
          <div class='text-lg'>다들 Postech의 Point로 모여!🙌</div>
        </div>
        <div class='flex justify-center mt-1 '>
          <div class='text-lg'>쾌적 건물 추천! 에너지 절약! 보상 지급!</div>
        </div>
        <div class='flex justify-center'>
          <div class='text-lg'>모여라 P.P 앱의 데모사이트입니다</div>
        </div>
        <div class='flex justify-center'>
          <div class='text-sm'> ※본 페이지는 PC 모바일 모두 작동합니다※ </div>
        </div>
        <div class="flex justify-center mt-1">
          <img class="h-2/5 w-2/5" alt="logo" src="img/logo.PNG" />
        </div>
        <div class='flex justify-center mt-1 h-1/4 '>
          <button class='m-auto bg-[#C80150] py-5 shadow-xl mx-1 w-4/6 h-2/3 rounded-2xl hover:bg-[#FFB300] text-white text-center align-middle '
                      onClick={toAdmin}> 
            <div class='text-2xl'>데모 페이지 연결</div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DefaultPage