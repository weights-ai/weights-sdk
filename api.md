# User

Types:

- <code><a href="./src/resources/user.ts">UserRetrieveResponse</a></code>

Methods:

- <code title="get /user">client.user.<a href="./src/resources/user.ts">retrieve</a>() -> UserRetrieveResponse</code>

# Images

Types:

- <code><a href="./src/resources/images.ts">ImageCreateResponse</a></code>
- <code><a href="./src/resources/images.ts">ImageRetrieveResponse</a></code>
- <code><a href="./src/resources/images.ts">ImageListResponse</a></code>
- <code><a href="./src/resources/images.ts">ImageEditResponse</a></code>

Methods:

- <code title="post /images/create">client.images.<a href="./src/resources/images.ts">create</a>({ ...params }) -> ImageCreateResponse</code>
- <code title="get /images/{id}">client.images.<a href="./src/resources/images.ts">retrieve</a>(id) -> ImageRetrieveResponse</code>
- <code title="get /images">client.images.<a href="./src/resources/images.ts">list</a>({ ...params }) -> ImageListResponse</code>
- <code title="post /images/edit">client.images.<a href="./src/resources/images.ts">edit</a>({ ...params }) -> ImageEditResponse</code>

# Videos

Types:

- <code><a href="./src/resources/videos.ts">VideoCreateResponse</a></code>

Methods:

- <code title="post /videos/create">client.videos.<a href="./src/resources/videos.ts">create</a>({ ...params }) -> VideoCreateResponse</code>

# ImageLoraModels

Types:

- <code><a href="./src/resources/image-lora-models.ts">ImageLoraModelCreateResponse</a></code>
- <code><a href="./src/resources/image-lora-models.ts">ImageLoraModelRetrieveResponse</a></code>
- <code><a href="./src/resources/image-lora-models.ts">ImageLoraModelListResponse</a></code>
- <code><a href="./src/resources/image-lora-models.ts">ImageLoraModelRetrieveStatusResponse</a></code>
- <code><a href="./src/resources/image-lora-models.ts">ImageLoraModelSearchResponse</a></code>

Methods:

- <code title="post /image-lora-models/create">client.imageLoraModels.<a href="./src/resources/image-lora-models.ts">create</a>({ ...params }) -> ImageLoraModelCreateResponse</code>
- <code title="get /image-lora-models/{id}">client.imageLoraModels.<a href="./src/resources/image-lora-models.ts">retrieve</a>(id) -> ImageLoraModelRetrieveResponse | null</code>
- <code title="get /image-lora-models">client.imageLoraModels.<a href="./src/resources/image-lora-models.ts">list</a>({ ...params }) -> ImageLoraModelListResponse</code>
- <code title="get /image-lora-models/{id}/status">client.imageLoraModels.<a href="./src/resources/image-lora-models.ts">retrieveStatus</a>(id) -> ImageLoraModelRetrieveStatusResponse | null</code>
- <code title="get /image-lora-models/search">client.imageLoraModels.<a href="./src/resources/image-lora-models.ts">search</a>({ ...params }) -> ImageLoraModelSearchResponse</code>

# Covers

Types:

- <code><a href="./src/resources/covers.ts">CoverCreateResponse</a></code>
- <code><a href="./src/resources/covers.ts">CoverRetrieveResponse</a></code>
- <code><a href="./src/resources/covers.ts">CoverListResponse</a></code>

Methods:

- <code title="post /covers/create">client.covers.<a href="./src/resources/covers.ts">create</a>({ ...params }) -> CoverCreateResponse</code>
- <code title="get /covers/{id}">client.covers.<a href="./src/resources/covers.ts">retrieve</a>(id) -> CoverRetrieveResponse | null</code>
- <code title="get /covers">client.covers.<a href="./src/resources/covers.ts">list</a>({ ...params }) -> CoverListResponse</code>

# RvcModels

Types:

- <code><a href="./src/resources/rvc-models/rvc-models.ts">RvcModelListResponse</a></code>
- <code><a href="./src/resources/rvc-models/rvc-models.ts">RvcModelRetrieveUploadedResponse</a></code>
- <code><a href="./src/resources/rvc-models/rvc-models.ts">RvcModelSearchResponse</a></code>
- <code><a href="./src/resources/rvc-models/rvc-models.ts">RvcModelUploadResponse</a></code>

Methods:

- <code title="get /rvc-models">client.rvcModels.<a href="./src/resources/rvc-models/rvc-models.ts">list</a>({ ...params }) -> RvcModelListResponse</code>
- <code title="get /rvc-models/uploaded/{id}">client.rvcModels.<a href="./src/resources/rvc-models/rvc-models.ts">retrieveUploaded</a>(id) -> RvcModelRetrieveUploadedResponse | null</code>
- <code title="get /rvc-models/search">client.rvcModels.<a href="./src/resources/rvc-models/rvc-models.ts">search</a>({ ...params }) -> RvcModelSearchResponse</code>
- <code title="post /rvc-models/upload">client.rvcModels.<a href="./src/resources/rvc-models/rvc-models.ts">upload</a>({ ...params }) -> RvcModelUploadResponse</code>

## Training

Types:

- <code><a href="./src/resources/rvc-models/training.ts">TrainingCreateResponse</a></code>
- <code><a href="./src/resources/rvc-models/training.ts">TrainingRetrieveResponse</a></code>
- <code><a href="./src/resources/rvc-models/training.ts">TrainingStatusResponse</a></code>

Methods:

- <code title="post /rvc-models/training/create">client.rvcModels.training.<a href="./src/resources/rvc-models/training.ts">create</a>({ ...params }) -> TrainingCreateResponse</code>
- <code title="get /rvc-models/training/{id}">client.rvcModels.training.<a href="./src/resources/rvc-models/training.ts">retrieve</a>(id) -> TrainingRetrieveResponse | null</code>
- <code title="get /rvc-models/training/{id}/status">client.rvcModels.training.<a href="./src/resources/rvc-models/training.ts">status</a>(id) -> TrainingStatusResponse | null</code>

# Songs

Types:

- <code><a href="./src/resources/songs.ts">SongCreateResponse</a></code>
- <code><a href="./src/resources/songs.ts">SongRetrieveResponse</a></code>
- <code><a href="./src/resources/songs.ts">SongListResponse</a></code>

Methods:

- <code title="post /songs/create">client.songs.<a href="./src/resources/songs.ts">create</a>({ ...params }) -> SongCreateResponse</code>
- <code title="get /songs/{id}">client.songs.<a href="./src/resources/songs.ts">retrieve</a>(id) -> SongRetrieveResponse | null</code>
- <code title="get /songs">client.songs.<a href="./src/resources/songs.ts">list</a>({ ...params }) -> SongListResponse</code>
