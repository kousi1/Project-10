var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["0d32fd7c-e8da-420a-9e5a-0181d341939a","f947f4b6-c11f-4324-a8a1-606834c804af","2e633d23-8233-49df-bd57-d35a4656ff06","db077e2f-2114-4d02-b2e0-c4156e15c451","d85e653f-5509-49ef-a62b-7a3fa5a604c6","02118dbf-e286-4e18-ac2a-654f4b7b5656","96109986-d6a9-46b4-bdb3-6d8f644ecca6","2c756cf5-9fe0-4500-bce8-d9ef4f93f10a","730ad53c-2c18-4fb7-8030-9319bbdcbca7","9e6eee50-3dc9-4400-83dc-04b3ccb82622","3e14dc0f-f4d2-48ee-a7c1-d14991f8636f"],"propsByKey":{"0d32fd7c-e8da-420a-9e5a-0181d341939a":{"name":"Underwater","sourceUrl":"assets/api/v1/animation-library/gamelab/Vg6bYwboQcGip.4oRoqXobcX2rE5QGop/category_backgrounds/background_underwater_17.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"Vg6bYwboQcGip.4oRoqXobcX2rE5QGop","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Vg6bYwboQcGip.4oRoqXobcX2rE5QGop/category_backgrounds/background_underwater_17.png"},"f947f4b6-c11f-4324-a8a1-606834c804af":{"name":"apple","sourceUrl":"assets/api/v1/animation-library/gamelab/R5HU7H.MzPJgfu.WtncglTeef4BzKuzc/category_food/apple_1.png","frameSize":{"x":333,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"R5HU7H.MzPJgfu.WtncglTeef4BzKuzc","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":333,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/R5HU7H.MzPJgfu.WtncglTeef4BzKuzc/category_food/apple_1.png"},"2e633d23-8233-49df-bd57-d35a4656ff06":{"name":"juiceBox","sourceUrl":"assets/api/v1/animation-library/gamelab/X9i8fa3vgduohjTXGqnJWqGM7qPzukxz/category_food/juice_box.png","frameSize":{"x":208,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"X9i8fa3vgduohjTXGqnJWqGM7qPzukxz","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":208,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/X9i8fa3vgduohjTXGqnJWqGM7qPzukxz/category_food/juice_box.png"},"db077e2f-2114-4d02-b2e0-c4156e15c451":{"name":"meatbone","sourceUrl":"assets/api/v1/animation-library/gamelab/kPvfnAqJ7_4XZSh5EebMAc4N8n7fX7ca/category_food/meatbone.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"kPvfnAqJ7_4XZSh5EebMAc4N8n7fX7ca","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/kPvfnAqJ7_4XZSh5EebMAc4N8n7fX7ca/category_food/meatbone.png"},"d85e653f-5509-49ef-a62b-7a3fa5a604c6":{"name":"pear","sourceUrl":"assets/api/v1/animation-library/gamelab/HjLCaZjSSdIw3Y4vGKCyeEhMN9RGDqWD/category_food/pear.png","frameSize":{"x":206,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"HjLCaZjSSdIw3Y4vGKCyeEhMN9RGDqWD","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":206,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/HjLCaZjSSdIw3Y4vGKCyeEhMN9RGDqWD/category_food/pear.png"},"02118dbf-e286-4e18-ac2a-654f4b7b5656":{"name":"soda","sourceUrl":"assets/api/v1/animation-library/gamelab/w8h7dbKasppGzezPNOsd8iobTZGT5HqQ/category_food/soda.png","frameSize":{"x":186,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"w8h7dbKasppGzezPNOsd8iobTZGT5HqQ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":186,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/w8h7dbKasppGzezPNOsd8iobTZGT5HqQ/category_food/soda.png"},"96109986-d6a9-46b4-bdb3-6d8f644ecca6":{"name":"fish1","sourceUrl":null,"frameSize":{"x":381,"y":396},"frameCount":1,"looping":true,"frameDelay":12,"version":"9KxDFSSVukOZfT4gKbCmFRlroaTDiwLd","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":381,"y":396},"rootRelativePath":"assets/96109986-d6a9-46b4-bdb3-6d8f644ecca6.png"},"2c756cf5-9fe0-4500-bce8-d9ef4f93f10a":{"name":"fish2","sourceUrl":null,"frameSize":{"x":396,"y":267},"frameCount":1,"looping":true,"frameDelay":12,"version":"g6982B7y2EjlhRz5A7.rrfyei3ZmuX3W","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":267},"rootRelativePath":"assets/2c756cf5-9fe0-4500-bce8-d9ef4f93f10a.png"},"730ad53c-2c18-4fb7-8030-9319bbdcbca7":{"name":"fish1flip","sourceUrl":null,"frameSize":{"x":381,"y":396},"frameCount":1,"looping":true,"frameDelay":12,"version":"n3OtyUfSV5dkXN3Q8rmaUV2c.zfy4JFt","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":381,"y":396},"rootRelativePath":"assets/730ad53c-2c18-4fb7-8030-9319bbdcbca7.png"},"9e6eee50-3dc9-4400-83dc-04b3ccb82622":{"name":"fish2flip","sourceUrl":null,"frameSize":{"x":396,"y":267},"frameCount":1,"looping":true,"frameDelay":12,"version":"Gu2NskRtPTR7U_mD24yAPdLObi6sb1.p","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":267},"rootRelativePath":"assets/9e6eee50-3dc9-4400-83dc-04b3ccb82622.png"},"3e14dc0f-f4d2-48ee-a7c1-d14991f8636f":{"name":"axe","sourceUrl":null,"frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":12,"version":"pV1zLI_KQ9Ya.1YNORDFNZ0qlMWwPgvo","categories":["tools"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/3e14dc0f-f4d2-48ee-a7c1-d14991f8636f.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var underwaterBackground = createSprite(200,200,400,400);
underwaterBackground.setAnimation("Underwater");

var appleImage = createSprite(66,252,20,20);
appleImage.setAnimation("apple");
appleImage.scale = 0.2;


var juiceBoxImage = createSprite(76,70,20,20);
juiceBoxImage.setAnimation("juiceBox");
juiceBoxImage.scale = 0.2;

var meatboneImage = createSprite(232,40,20,20);
meatboneImage.setAnimation("meatbone");
meatboneImage.scale = 0.2;

var pearImage = createSprite(202,192,20,20);
pearImage.setAnimation("pear");
pearImage.scale = 0.2;

var sodaImage = createSprite(316,132,20,20);
sodaImage.setAnimation("soda");
sodaImage.scale = 0.2;

var fishImage = createSprite(164,358,20,20);
fishImage.setAnimation("fish1");
fishImage.scale = 0.2;

var fishImage1 = createSprite(394,168,20,20);
fishImage1.setAnimation("fish2");
fishImage1.scale = 0.2;


var axeImage = createSprite(330,302,20,20);
axeImage.setAnimation("axe");
axeImage.scale = 0.7;

fishImage.velocityY = -10;
fishImage1.velocityX = -10;

var gameState = "start";

var score = 0;

function draw () {

  if(gameState == "start"){
    background("purple");
    fill("white");
    textSize(20);
    text("Help! There is a lot of trash in the ocean.",20,160);
    text("Use the axe to clean it up.",100,180);
    text("But be careful, if the axe touches the fish,",25,200);
    text("you lose the game :(",120,220);
    text("Press Space To Start",110,350);
    if(keyDown("space")){
      gameState = "play";
    }
  }
  
  
  
  if(gameState == "play"){
    
    text("score:"+score,268,28);
    
   edges =  createEdgeSprites();
      
    fishImage.bounceOff(edges[1]);
    fishImage.bounceOff(edges[3]);
    fishImage1.bounceOff(edges[2]);
    fishImage1.bounceOff(edges[0]);
    
    if(fishImage.isTouching(edges[1])){
      fishImage.setAnimation("fish1flip");
    }
  
    if(fishImage.isTouching(edges[3])){
      fishImage.setAnimation("fish1");
    }

    if(fishImage1.isTouching(edges[0])){
      fishImage1.setAnimation("fish2flip");
    }
  
    if(fishImage1.isTouching(edges[2])){
      fishImage1.setAnimation("fish2");
    }
  
    axeImage.x = World.mouseX;
    axeImage.y = World.mouseY;
  
    if(axeImage.isTouching(appleImage)){
      appleImage.destroy();
      score = score+1;
    }

    if(axeImage.isTouching(juiceBoxImage)){
      juiceBoxImage.destroy();
      score = score+1;
    }
  
    if(axeImage.isTouching(meatboneImage)) {
      meatboneImage.destroy();
      score = score+1;
    } 

    if(axeImage.isTouching(pearImage)){
      pearImage.destroy();
      score = score+1;
    }

    if(axeImage.isTouching(sodaImage)){
      sodaImage.destroy();
      score = score+1;
    }
    
    drawSprites();
  }

  if(axeImage.isTouching(fishImage)||axeImage.isTouching(fishImage1)){
    gameState = "lose";
  }
  
  if(gameState == "lose"){
    background("purple");
    
    fill("white");
    textSize(50);
    text("You lose!", 100,200);
  }
  
  if(score === 5){
    background("purple");
    fill("white");
    textSize(50);
    text("YOU WIN!",100,200);
  }
  
} 



  




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
