const dummy_config = {
  analyzer_config: {
    bbox_mode: 'false',
    detection_area_factor: 0.001,
    gauss_blur_factor: 7,
    resize_width: 400,
  },

  adjust_config: {
    bbox_mode: 'false',
  },
  file_writer_config: {
    mode: 'gif',
    image_limit: 50,
    inactivity_limit: 4,
    fps_in_avi_mode: 30,
    buffer_length: 10,
  },
  general_config: {
    camera: 'webcam',
    debug_mode: 'false',
    draw_bbox: 'false',
    enable_fps_timer: 'false',
    output_format: 'gif',
    verbose: 'true',
    create_buffer: 'true',
  },
  gif_config: {
    gif_duration: 50,
    imagemagick_installed: 'true',
    loop_gif: 0,
  },
  picam_config: {
    awb_gains: 2,
    awb_mode: 'off',
    exposure_mode: 'auto',
    framerate: 30,
    'resolution_16:9': [
      [1280, 730],
      [1640, 922],
      [1920, 1080],
    ],
    'resolution_4:3': [
      [640, 480],
      [1024, 768],
      [1640, 1232],
    ],
  },
}

export default dummy_config