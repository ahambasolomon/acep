<template>
  <div class="p-2 content mb-5">
    <h3 class="my-3" style="color: $primary;"> Paused test sessions </h3>
    <div class="container">

      <div class="my-5 row">
        <div class="col-md-4 testp py-1">
          <h5 class="progress_strong"> CBAP.</h5>
          <span class="progress_span"> Knowledge Check </span>
        </div>
        <div class="col-md-4 testp py-1">
          <div>
            <div class="progress">
              <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <span class="progress_span"> Created on 14th December 2021 </span>
        </div>
        <div class="col-md-4 py-1">
          <button type="button" class="btn btn-warning btn-sm float-right">Resume</button>
        </div>
      </div>

      <div class="my-5 row">
        <div class="col-md-4 testp py-1">
          <h5 class="progress_strong"> CBAP.</h5>
          <span class="progress_span"> Knowledge Check </span>
        </div>
        <div class="col-md-4 testp py-1">
          <div>
            <div class="progress">
              <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <span class="progress_span"> Created on 14th December 2021 </span>
        </div>
        <div class="col-md-4 py-1">
          <button type="button" class="btn btn-warning btn-sm float-right">Resume</button>
        </div>
      </div>

      <div class="my-5 row">
        <div class="col-md-4 testp py-1">
          <h5 class="progress_strong"> CBAP.</h5>
          <span class="progress_span"> Knowledge Check </span>
        </div>
        <div class="col-md-4 testp py-1">
          <div>
            <div class="progress">
              <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <span class="progress_span"> Created on 14th December 2021 </span>
        </div>
        <div class="col-md-4 py-1">
          <button type="button" class="btn btn-warning btn-sm float-right">Resume</button>
        </div>
      </div>

      <div class="my-5 row">
        <div class="col-md-4 testp py-1">
          <h5 class="progress_strong"> CBAP.</h5>
          <span class="progress_span"> Knowledge Check </span>
        </div>
        <div class="col-md-4 testp py-1">
          <div>
            <div class="progress">
              <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <span class="progress_span"> Created on 14th December 2021 </span>
        </div>
        <div class="col-md-4 py-1">
          <button type="button" class="btn btn-warning btn-sm float-right">Resume</button>
        </div>
      </div>

    </div>
  </div>
</template>
<style lang="scss" scoped>
  .content {
    height: max-content;
    background: #ffffff;
    h3 {
      font-weight: 900;
    }
  }
  .progress_strong{
    font-size: 14px;
    line-height: 8px;
    color: #000000;
    margin: 0px;
  }
  .progress_span{
    font-size: 12px;
    line-height: 14px;
    text-align: right;
    color: rgba(34, 33, 91, 0.6);
  }
  .testp {
    padding: 0px;
    color: black;
    .progress {
      height: 0.4rem;
      margin-left: 33px;
    }
  }
</style>
