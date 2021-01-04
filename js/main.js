let inited = false;

window.main = () => {

    if (inited !== true) {
        inited = true;

        room_set_width(room, 360);
        room_set_height(room, 640);
        surface_resize(application_surface, 360, 640);
        window_set_size(360, 640);
        window_center();
        room_restart();
    }

    else {
        const bg_spr = sprite_add("image/bg.png", 1, false, false, 0, 0);
        const bg_layer = layer_create(100);
        const bg = layer_background_create(bg_layer, bg_spr);
        layer_background_htiled(bg, true);
        layer_background_vtiled(bg, true);
        layer_hspeed(bg_layer, -2);
        
        const inst_layer = layer_create(-200);
    }
};