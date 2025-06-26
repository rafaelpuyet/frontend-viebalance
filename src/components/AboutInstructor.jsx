"use client"

import Image from 'next/image'
import Instructor from '@public/tamara.png'
import { useRef, useState, useEffect } from 'react'

export default function AboutInstructor() {
  const videoRef = useRef(null)
  const containerRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(1)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const handleVideoClick = (e) => {
    // Evitar que el click en los controles active esta función
    if (e.target.closest('.controls-area')) {
      return
    }
    togglePlay()
  }

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted
    setIsMuted(videoRef.current.muted)
    if (!videoRef.current.muted) {
      videoRef.current.volume = volume
    }
  }

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value) / 100
    videoRef.current.volume = newVolume
    videoRef.current.muted = newVolume === 0
    setVolume(newVolume)
    setIsMuted(newVolume === 0)
  }

  const handleProgress = () => {
    const current = videoRef.current.currentTime
    const total = videoRef.current.duration
    const progress = (current / total) * 100
    setProgress(progress)
    setCurrentTime(current)
    setDuration(total)
  }

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * videoRef.current.duration
    videoRef.current.currentTime = seekTime
    setProgress(e.target.value)
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true))
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false))
    }
  }

  const handleMouseMove = () => {
    setShowControls(true)
    clearTimeout(window.controlsTimeout)
    window.controlsTimeout = setTimeout(() => {
      if (isPlaying) setShowControls(false)
    }, 3000)
  }

  const handleLoadedData = () => {
    setIsLoading(false)
    setDuration(videoRef.current.duration)
  }

  const handleCanPlay = () => {
    setIsLoading(false)
  }

  const handleLoadStart = () => {
    setIsLoading(true)
  }

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.addEventListener('timeupdate', handleProgress)
      video.addEventListener('loadeddata', handleLoadedData)
      video.addEventListener('canplay', handleCanPlay)
      video.addEventListener('loadstart', handleLoadStart)
      
      // Si el video ya está listo, quitar el loading inmediatamente
      if (video.readyState >= 3) {
        setIsLoading(false)
      }
    }
    
    const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    
    return () => {
      if (video) {
        video.removeEventListener('timeupdate', handleProgress)
        video.removeEventListener('loadeddata', handleLoadedData)
        video.removeEventListener('canplay', handleCanPlay)
        video.removeEventListener('loadstart', handleLoadStart)
      }
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      clearTimeout(window.controlsTimeout)
    }
  }, [])

  return (
    <>
      <section className="py-20 px-6 lg:px-8 bg-white" id="instructor-video">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Conoce a Tu Instructora
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre la pasión y profesionalismo detrás de cada clase de Pilates
            </p>
          </div>
          
          <div className="flex justify-center">
            <div 
              ref={containerRef} 
              className="relative bg-black rounded-2xl overflow-hidden shadow-2xl max-w-sm md:max-w-md aspect-[9/16] group cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => isPlaying && setShowControls(false)}
              onClick={handleVideoClick}
            >
              {/* Loading Spinner */}
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                </div>
              )}
              
              {/* Video Element */}
              <video
                ref={videoRef}
                className="w-full h-full object-contain"
                src="/secuencia 01.mp4"
                aria-label="Video de presentación de Tamara Puyet"
                playsInline
                preload="metadata"
              />
              
              {/* Play Button Overlay - Solo cuando está pausado y no cargando */}
              {!isPlaying && !isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="bg-white/90 hover:bg-white text-gray-900 rounded-full p-6 transition-all duration-300 transform hover:scale-110 shadow-2xl">
                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              )}
              
              {/* Controls */}
              <div className={`controls-area absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
                showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
              }`}>
                {/* Progress Bar */}
                <div className="px-4 pb-2">
                  <div className="relative">
                    <input
                      type="range"
                      value={progress}
                      onChange={handleSeek}
                      className="w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, #ffffff 0%, #ffffff ${progress}%, rgba(255,255,255,0.2) ${progress}%, rgba(255,255,255,0.2) 100%)`
                      }}
                      aria-label="Barra de progreso del video"
                      min="0"
                      max="100"
                    />
                  </div>
                </div>
                
                {/* Control Buttons */}
                <div className="flex items-center justify-between px-4 pb-4">
                  <div className="flex items-center space-x-3">
                    {/* Play/Pause Button */}
                    <button
                      onClick={togglePlay}
                      className="text-white hover:text-gray-300 transition-colors p-1"
                      aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
                    >
                      {isPlaying ? (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      )}
                    </button>
                    
                    {/* Mute Button */}
                    <button
                      onClick={toggleMute}
                      className="text-white hover:text-gray-300 transition-colors p-1"
                      aria-label={isMuted ? "Activar sonido" : "Silenciar video"}
                    >
                      {isMuted ? (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                        </svg>
                      )}
                    </button>
                    
                    {/* Volume Slider */}
                    <div className="hidden sm:flex items-center">
                      <input
                        type="range"
                        value={volume * 100}
                        onChange={handleVolumeChange}
                        className="w-20 h-1 bg-white/20 rounded-full appearance-none cursor-pointer slider"
                        style={{
                          background: `linear-gradient(to right, #ffffff 0%, #ffffff ${volume * 100}%, rgba(255,255,255,0.2) ${volume * 100}%, rgba(255,255,255,0.2) 100%)`
                        }}
                        aria-label="Control de volumen"
                        min="0"
                        max="100"
                      />
                    </div>
                    
                    {/* Time Display */}
                    <div className="text-white text-sm font-medium">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </div>
                  </div>
                  
                  {/* Fullscreen Button */}
                  <button
                    onClick={toggleFullscreen}
                    className="text-white hover:text-gray-300 transition-colors p-1"
                    aria-label={isFullscreen ? "Salir de pantalla completa" : "Entrar a pantalla completa"}
                  >
                    {isFullscreen ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8 bg-gray-50" id="sobre-nosotros">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Conoce a Tu Instructora de Pilates
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Tamara Puyet Cerda
            </h3>
            <p className="text-lg font-medium text-gray-600 mb-6">
              Kinesióloga e Instructora Certificada de Pilates Reformer
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Apasionada por el movimiento y el bienestar, me especializo en <strong>Pilates Reformer</strong> para ayudar a las personas a transformar su cuerpo y mejorar su calidad de vida a través del ejercicio consciente y personalizado.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Mi enfoque es completamente personalizado: cada clase está diseñada específicamente para ti, tus objetivos y tu nivel. Con certificación internacional en Pilates Reformer, formación en kinesiología y formación continua, te ofrezco una experiencia única en nuestro estudio en Las Condes.
            </p>
            
            <div className="bg-white border-l-4 border-gray-900 p-6 rounded-lg shadow-sm mb-8">
              <p className="text-gray-700 italic text-lg leading-relaxed">
                "El Pilates Reformer permite un trabajo más preciso y efectivo. Mi misión es ayudarte a descubrir la fuerza que llevas dentro, con resultados que se sienten desde la primera clase."
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Kinesióloga titulada</span>
              </div>
              
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Instructora Certificada</span>
              </div>
              
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm sm:col-span-2">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Formación continua con instructores internacionales</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={Instructor}
                  className="w-full h-full object-cover aspect-square"
                  alt="Tamara Puyet - Instructora especialista en Pilates Reformer Las Condes"
                  placeholder="blur"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        button {
          cursor: pointer;
        }
        
        input[type="range"] {
          cursor: pointer;
        }
      `}</style>
    </>
  );
}